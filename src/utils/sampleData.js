const sampleData = [
  {
    id: '1',
    title: 'List files in Linux',
    category: 'Linux',
    tags: ['command', 'filesystem'],
    content: `# List files\n\n\`\`\`bash\nls -la\n\`\`\`\n\nLists all files with details including hidden files.`,
    favorite: false,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
    versions: []
  },
  {
    id: '2',
    title: 'Basic SQL SELECT',
    category: 'SQL',
    tags: ['query', 'select'],
    content: `# SELECT Query\n\n\`\`\`sql\nSELECT * FROM users WHERE age > 18;\n\`\`\`\n\nRetrieves all users older than 18.`,
    favorite: true,
    createdAt: new Date('2023-01-02'),
    updatedAt: new Date('2023-01-02'),
    versions: []
  },
  {
    id: '3',
    title: 'AWS S3 Bucket Creation',
    category: 'AWS',
    tags: ['cloud', 'storage'],
    content: `# Create S3 Bucket\n\nUse AWS CLI:\n\n\`\`\`bash\naws s3 mb s3://my-bucket\n\`\`\`\n\nOr via console: Navigate to S3 service and click "Create bucket".`,
    favorite: false,
    createdAt: new Date('2023-01-03'),
    updatedAt: new Date('2023-01-03'),
    versions: []
  },
  {
    id: '4',
    title: 'Docker Basic Commands',
    category: 'DevOps',
    tags: ['container', 'docker'],
    content: `# Docker Commands\n\n- Build image: \`docker build -t myapp .\`\n- Run container: \`docker run -p 3000:3000 myapp\`\n- List containers: \`docker ps\``,
    favorite: false,
    createdAt: new Date('2023-01-04'),
    updatedAt: new Date('2023-01-04'),
    versions: []
  },
  {
    id: '5',
    title: 'Kubernetes Pod Status',
    category: 'Kubernetes',
    tags: ['k8s', 'pod'],
    content: `# Check Pod Status\n\n\`\`\`bash\nkubectl get pods\n\`\`\`\n\nShows all pods in the current namespace.`,
    favorite: false,
    createdAt: new Date('2023-01-05'),
    updatedAt: new Date('2023-01-05'),
    versions: []
  },
  {
    id: '6',
    title: 'Common Linux Commands',
    category: 'Daily Commands',
    tags: ['command', 'daily'],
    content: `# Daily Commands\n\n- Change directory: \`cd /path\`\n- Show current dir: \`pwd\`\n- Create file: \`touch file.txt\`\n- Edit file: \`nano file.txt\``,
    favorite: true,
    createdAt: new Date('2023-01-06'),
    updatedAt: new Date('2023-01-06'),
    versions: []
  }
];

export default sampleData;
