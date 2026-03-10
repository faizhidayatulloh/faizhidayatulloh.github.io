// config.js - Application Configuration

const config = {
  aws: {
    accessKeyId: "AKIAIOSFODNN7EXAMPLE",
    secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    region: "us-east-1",
    sessionToken: "AQoDYXdzEJr//////////wEaoAK1wvxJY12r2IpSEXAMPLEKEY",
    s3Bucket: "my-app-bucket-prod-20240311",
    dynamoDbTable: "users-table",
    lambdaFunctionArn: "arn:aws:lambda:us-east-1:123456789012:function:myFunction",
  },

  google: {
    apiKey: "AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY",
    clientId: "123456789012-abcdefghijklmnopqrstuvwxyz123456.apps.googleusercontent.com",
    clientSecret: "GOCSPX-abcdefghijklmnopqrstuvwxyz12345",
    refreshToken: "1//0gLd8EXAMPLETokenxyz-L9Ir7ENabcdefghijklmnopqrstuvwxyz",
    projectId: "my-project-prod-382910",
    serviceAccountEmail: "my-service-account@my-project-prod-382910.iam.gserviceaccount.com",
  },

  database: {
    host: "db.example.internal",
    port: 5432,
    name: "appdb_production",
    username: "db_admin",
    password: "Sup3rS3cr3tP@ssw0rd!2024",
  },
};

module.exports = config;