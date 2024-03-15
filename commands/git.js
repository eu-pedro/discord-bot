const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor("Orange")
	.setTitle('Comandos do Git')
	.addFields(
    { name: '\u200B', value: '\u200B' },
    { name: '$ git init [nome-do-projeto]', value: 'Cria um novo repositório local com um nome especificado', inline: true },
    { name: '$ git clone [url]', value: 'Baixa um projeto e seu histórico de versão inteiro', inline: true },
    { name: '$ git stash', value: 'Armazena temporariamente todos os arquivos monitorados modificados', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: '$ git status', value: 'Revise edições e crie uma transação de commit', inline: true },
    { name: '$ git add [nome-do-arquivo]', value: 'Faz o snapshot de um arquivo na preparação para versionamento', inline: true },
    { name: '$ git commit -m "[mensagem]"', value: 'Salva suas mudanças de forma permanente, adicionando uma descrição que explica o que foi feito para que você e outras pessoas possam entender mais tarde.', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: '$ git branch', value: 'Lista todos os branches locais no repositório atual', inline: true },
    { name: '$ git branch [nome-branch]', value: 'Cria uma nova branch', inline: true },
    { name: '$ git switch -c [nome-branch]', value: 'Muda para a branch especificada e atualiza o diretório de trabalho', inline: true },
    { name: '\u200B', value: '\u200B' },
    { name: '$ git merge [nome-branch]', value: 'Combina o histórico da branch especificada a branch atual', inline: true },
    { name: '$ git push [alias] [branch]', value: 'Envia todas as suas mudanças locais para o GitHub, permitindo que outras pessoas vejam e trabalhem nelas.', inline: true },
    { name: '$ git pull', value: 'Baixa o histórico e incorpora as mudanças', inline: true },
)


module.exports = {
  data: new SlashCommandBuilder()
  .setName('git')
  .setDescription('Relembrar comandos do Git'),

  async execute(interaction) {
    await interaction.reply({ embeds: [exampleEmbed]})
  }
}

