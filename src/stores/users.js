import { ref } from 'vue';
import { defineStore } from 'pinia';
import { supabase } from '../supabase';

export const useUserStore = defineStore('users', () => {
  const user = ref(null);
  const errorMessage = ref('');
  const loading = ref(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async (credentials) => {
    const { email, password } = credentials;

    if (!validateEmail(email)) {
      return (errorMessage.value = 'Email is invalid');
    }

    if (!password.length) {
      return (errorMessage.value = 'Password cannot be empty');
    }

    loading.value = true;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      loading.value = false;
      return (errorMessage.value = error.message);
    }

    const { data: existingUser } = await supabase
      .from('users')
      .select()
      .eq('email', email)
      .single();

    user.value = {
      email: existingUser.email,
      username: existingUser.username,
      id: existingUser.id,
    };
    loading.value = false;
    errorMessage.value = '';
  };

  const handleSignup = async (credentials) => {
    const { email, password, username } = credentials;

    if (password.length < 6) {
      return (errorMessage.value = 'Password length is too short');
    }

    if (username.length < 4) {
      return (errorMessage.value = 'Username length is too short');
    }

    if (!validateEmail(email)) {
      return (errorMessage.value = 'Email is invalid');
    }

    loading.value = true;

    const { data: usernameExists } = await supabase
      .from('users')
      .select()
      .eq('username', username)
      .single();

    if (usernameExists) {
      loading.value = false;
      return (errorMessage.value = 'Username already exists');
    }

    errorMessage.value = '';

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      loading.value = false;
      return (errorMessage.value = error.message);
    }

    await supabase.from('users').insert({
      username,
      email,
    });

    const { data: newUser } = await supabase
      .from('users')
      .select()
      .eq('email', email)
      .single();

    user.value = {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username,
    };

    loading.value = false;
  };

  const handleLogout = () => {};

  const getUser = () => {};

  const clearErrorMessage = () => {
    errorMessage.value = '';
  };

  return {
    user,
    errorMessage,
    loading,
    user,
    handleLogin,
    handleSignup,
    handleLogout,
    getUser,
    clearErrorMessage,
  };
});
