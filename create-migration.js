const { execSync } = require('child_process');

const migrationName = process.argv[2];

if (!migrationName) {
  console.error('Por favor, forneça um nome para a migração.');
  process.exit(1);
}

const command = `ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:create src/migrations/${migrationName}`;

try {
  execSync(command, { stdio: 'inherit' });
  console.log(`Migração ${migrationName} criada com sucesso.`);
} catch (error) {
  console.error(`Erro ao criar a migração ${migrationName}:`, error.message);
}