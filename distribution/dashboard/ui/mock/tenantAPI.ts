export default {
  '/api/v1/obtenants': {
    data: [
      {
        charset: 'string',
        clusterName: 'string',
        createTime: 'string',
        locality: 'string',
        name: 'test',
        namespace: 'test',
        status: 'string',
        tenantName: 'string',
        tenantRole: 'string',
        topology: [
          {
            iopsWeight: 0,
            logDiskSize: 'string',
            maxCPU: 'string',
            maxIops: 0,
            memorySize: 'string',
            minCPU: 'string',
            minIops: 0,
            priority: 0,
            type: 'string',
            zone: 'string',
          },
        ],
        unitNumber: 0,
      },
    ],
    message: 'string',
    successful: true,
  },
  '/api/v1/obtenants/test/test': {
    data: {
      charset: 'string',
      clusterName: 'string',
      createTime: 'string',
      locality: 'string',
      name: 'test',
      namespace: 'test',
      primaryTenant: 'string',
      restoreSource: {
        archiveSource: 'string',
        bakDataSource: 'string',
        bakEncryptionSecret: 'string',
        ossAccessSecret: 'string',
        type: 'string',
        until: 'string',
      },
      rootCredential: 'string',
      standbyROCredentail: 'string',
      status: 'string',
      tenantName: 'string',
      tenantRole: 'Primary',
      topology: [
        {
          iopsWeight: 0,
          logDiskSize: 'string',
          maxCPU: 'string',
          maxIops: 0,
          memorySize: 'string',
          minCPU: 'string',
          minIops: 0,
          priority: 0,
          type: 'string',
          zone: 'string',
        },
      ],
      unitNumber: 0,
    },
    message: 'string',
    successful: true,
  },
};
