module.exports = {
    'strapi-neon-tech-db-branches': {
      enabled: true,
      config: {
        neonApiKey: "3tjj900fcecy4msffga5tzpkzzom829hy29b35dp7vxyn425u40oxxgtnqvxl3aq", // get it from here: https://console.neon.tech/app/settings/api-keys
        neonProjectName: "ecommerce-bri", // the neon project under wich your DB runs
        neonRole: "neondb_owner", // create it manually under roles for your project first
        gitBranch: "main" // branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
      }
    },
    
  }