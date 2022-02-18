module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bde91c84d2503f41ebd520784a8871d4'),
  },
});
