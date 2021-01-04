module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/monster-slayer/" // <== name of your GH repository
      : "/",
};
