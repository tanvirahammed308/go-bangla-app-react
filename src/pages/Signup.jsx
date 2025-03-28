import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, agreeTerms });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign up</h2>

            {/* Social Sign Up Options */}
            <div className="space-y-3 mb-6">
              <div 
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${selectedProvider === 'google' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
                onClick={() => {
                  setSelectedProvider('google');
                  setShowEmailForm(false);
                }}
              >
                <input
                  id="signup-google"
                  name="signup-method"
                  type="radio"
                  checked={selectedProvider === 'google'}
                  onChange={() => {}}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="signup-google" className="ml-3 block text-sm font-medium text-gray-700">
                  Sign Up with Google
                </label>
              </div>

              <div 
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${selectedProvider === 'github' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
                onClick={() => {
                  setSelectedProvider('github');
                  setShowEmailForm(false);
                }}
              >
                <input
                  id="signup-github"
                  name="signup-method"
                  type="radio"
                  checked={selectedProvider === 'github'}
                  onChange={() => {}}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="signup-github" className="ml-3 block text-sm font-medium text-gray-700">
                  Sign Up with GitHub
                </label>
              </div>
            </div>

            {/* Email Sign Up Option */}
            <div 
              className={`p-3 mb-6 border rounded-lg cursor-pointer transition-colors ${showEmailForm ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
              onClick={() => {
                setShowEmailForm(!showEmailForm);
                setSelectedProvider(null);
              }}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Or sign up with e-mail</span>
                <span className="text-gray-500 transform transition-transform duration-200">
                  {showEmailForm ? '▲' : '▼'}
                </span>
              </div>
            </div>

            {/* Email/Password Form */}
            {showEmailForm && (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Sign Up
                </button>
              </form>
            )}

            {/* Terms checkbox */}
            {showEmailForm && (
              <div className="flex items-start mt-4">
                <div className="flex items-center h-5">
                  <input
                    id="agree-terms"
                    name="agree-terms"
                    type="checkbox"
                    required
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </div>
                <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
                  I agree to abide by the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                </label>
              </div>
            )}

            {/* Login link */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Already have an account? 
                <Link to='/login' className="font-medium text-blue-600 hover:text-blue-500"> Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;