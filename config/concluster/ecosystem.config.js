module.exports = {
  apps: [
    {
      name: "Cluster",
      script: "index.js",
      instances: 0,
      exec_mode: "cluster",
    },
  ],
};
