module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**/*.js',
      './components/**/*.js',
    ],
    options: {
      whitelist: [
      'bg-blue-600',
      'bg-purple-600',
      'bg-green-600',
      'bg-teal-600',
      'bg-red-600',
      'bg-indigo-600',
      'bg-yellow-600',
      'bg-orange-600',
      'bg-pink-600',
      ],
   },
  },
  theme: {},
  variants: {},
  plugins: [],
}
