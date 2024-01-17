-- Inserir dados na tabela usuario
INSERT INTO usuario (data_nascimento, contato, cpf, email, imagem, nis, nome, nome_mae, nome_pai, rg, senha, sexo, titulo_eleitor)
VALUES ('2001-10-18', 'adminContato', 'adminCPF', 'admin@admin.com', NULL, 'adminNIS', 'Admin', 'adminMae', 'adminPai', 'adminRG', '$2a$10$wbb876z9EA8ZNcqK9NPUt.oqYukHMGAtV0PlaQBwry7dzZSmKpPhm
', 'M', 'adminTituloEleitor');

INSERT INTO admin (id)
SELECT id FROM usuario WHERE email = 'admin@admin.com';

INSERT INTO usuario_roles (user_id, role)
SELECT id, 'ADMIN' FROM usuario WHERE email = 'admin@admin.com';

INSERT INTO usuario_roles (user_id, role)
SELECT id, 'AGRICULTOR' FROM usuario WHERE email = 'admin@admin.com';

INSERT INTO usuario_roles (user_id, role)
SELECT id, 'GERENTE' FROM usuario WHERE email = 'admin@admin.com';

INSERT INTO usuario_roles (user_id, role)
SELECT id, 'COPPABACS' FROM usuario WHERE email = 'admin@admin.com';