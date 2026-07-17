import { Lock, Mail, User } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin, useSignup } from '../features/auth/hooks/useUser';
import ThemeSwitch from '../shared/components/ThemeSwitch';
import { useToast } from '../shared/hooks/useToast';
import { Button } from '../shared/ui';

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const loginMutation = useLogin();
  const signupMutation = useSignup();
  const { error: showError } = useToast();
  const isPending = isLogin ? loginMutation.isPending : signupMutation.isPending;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await loginMutation.mutateAsync({ email, password });
      } else {
        await signupMutation.mutateAsync({ email, password, firstName, lastName });
      }
      navigate('/projects', { replace: true });
    } catch (err: unknown) {
      // Handle error directly and show toast
      const error = err as {
        message?: string;
        response?: { status?: number; data?: { error?: string; message?: string } };
      };

      // First check if it's a 401 from response
      if (error.response?.status === 401) {
        const msg =
          error.response.data?.error || error.response.data?.message || error.message || 'Incorrect email or password';
        showError('Authentication Failed', msg);
      } else if (error.message) {
        // Use the error message directly if available
        showError('Authentication Failed', error.message);
      } else {
        showError('Authentication Failed', 'Something went wrong. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-md"
      >
        <div className="glass-card p-10 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20 blur-[80px] bg-gradient-to-br from-indigo-500 to-violet-500"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center mb-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
              className="w-16 h-16 rounded-2xl bg-zinc-900 dark:bg-white/10 border border-transparent dark:border-white/10 flex items-center justify-center gap-1.5 mb-6 shadow-raised"
            >
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="text-3xl font-semibold text-fg tracking-tight"
            >
              {isLogin ? 'Welcome back' : 'Get started'}
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-fg-muted mt-2 text-center text-sm"
            >
              {isLogin ? 'Sign in to your test management hub' : 'Join your team’s testing workspace'}
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  key="name-fields"
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginBottom: 20 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-white/30" />
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 glass-input rounded-2xl"
                      required
                    />
                  </div>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-white/30" />
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 glass-input rounded-2xl"
                      required
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-white/30" />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 glass-input rounded-2xl"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-white/30" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                className="w-full pl-12 pr-4 py-4 glass-input rounded-2xl"
                required
              />
            </div>

            <Button type="submit" size="lg" fullWidth loading={isPending}>
              {isPending ? 'Please wait…' : isLogin ? 'Sign in' : 'Create account'}
            </Button>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-fg-muted hover:text-fg transition-colors cursor-pointer"
            >
              {isLogin ? "Don't have an account? " : 'Already have an account? '}
              <span className="font-semibold text-accent">{isLogin ? 'Sign up' : 'Sign in'}</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
      <ThemeSwitch />
    </div>
  );
}
