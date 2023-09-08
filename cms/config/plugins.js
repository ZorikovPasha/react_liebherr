module.exports = ({env}) => {
  return {
    upload: {
      provider: 'database',
      providerOptions: {
        absoluteUrl: true
      }
    },
  };
};