export type FAQAnswer =
    | { type: "text"; items: string[] }
    | { type: "list"; items: string[] };

export type FAQItem = {
    question: string;
    answer: FAQAnswer[];
};

export type FAQSection = {
    title: string;
    items: FAQItem[];
};

export const faqData: FAQSection[] = [
    {
        title: "Sobre o Serviço",
        items: [
            {
                question: "O que é um kit de receitas?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Um kit de receitas é uma caixa que reúne todos os ingredientes necessários para preparar pratos em casa, já porcionados na medida certa e acompanhados de instruções passo a passo.",
                            "Em vez de procurar receitas, fazer lista de compras e calcular quantidades, você recebe tudo organizado para cozinhar: ingredientes frescos, orientações claras e o método completo de preparo.",
                        ],
                    },
                ],
            },
            {
                question: "O que é a Saboreô?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "A Saboreô é um serviço de assinatura de kits de receitas criadas pelo chef Thiago Sodré, com ingredientes frescos já porcionados e um método de preparo pensado para que qualquer pessoa consiga cozinhar em casa com confiança.",
                            "Cada receita inclui:",
                        ],
                    },
                    {
                        type: "list",
                        items: [
                            "ingredientes na medida exata",
                            "passo a passo impresso",
                            "vídeo tutorial gravado pelo chef",
                            "sequência de preparo testada",
                        ],
                    },
                    {
                        type: "text",
                        items: [
                            "Mesmo quem não tem experiência na cozinha consegue chegar a um resultado bonito, saboroso e consistente, como em um restaurante!",
                        ],
                    },
                ],
            },
            {
                question: "A Saboreô entrega comida pronta?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Não! A Saboreô entrega apenas os ingredientes e o método completo para você cozinhar.",
                            "Você segue o passo a passo impresso e o vídeo, e o prato sai como planejado pelo chef, sem improviso.",
                        ],
                    },
                ],
            },
            {
                question: "Por que a Saboreô é diferente?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Receitas de chef, ingredientes na medida certa, método testado, suporte visual e escrito, e resultado consistente.",
                            "Você escolhe o que comer, e a Saboreô cuida do resto!",
                        ],
                    },
                ],
            },
            {
                question: "Quem cria as receitas da Saboreô?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Todas as receitas são criadas pelo chef Thiago Sodré, combinando criatividade, técnicas de restaurante e simplicidade.",
                            "O resultado é delicioso e confiável, mesmo para iniciantes.",
                        ],
                    },
                ],
            },
            {
                question: "Como funciona a assinatura?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Você se torna assinante, escolhe as receitas e quantidades toda semana, pode pausar ou cancelar quando quiser, e paga só pelo que escolheu.",
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Como Funciona",

        items: [
            {
                question: "Como funciona uma semana típica?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "O app mostra o cardápio das próximas 4 semanas, permitindo que você planeje suas escolhas. Pode até receber sugestões com base nas suas preferências, mas você pode editar livremente.",
                            "Para a semana seguinte, escolha ou edite suas receitas até quinta-feira da semana anterior, até às 16h00, quando o menu será fechado.",
                            "Depois de confirmar, seu cartão será cobrado apenas pelas receitas escolhidas, e a entrega chega na terça-feira com ingredientes frescos, passo a passo impresso e vídeo tutorial para cozinhar com confiança.",
                        ],
                    },
                ],
            },
            {
                question: "Posso mudar minha seleção toda semana?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Sim! Troque receitas, mude quantidades ou pule a semana. A Saboreô se adapta ao seu ritmo.",
                        ],
                    },
                ],
            },
            {
                question: "E se eu esquecer de escolher?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Toda semana, fazemos uma nova sugestão de receitas com base nas suas preferências. Se você não entrar no app, você receberá automaticamente essa sugestão da semana.",
                        ],
                    },
                ],
            },
            {
                question: "Posso pular uma semana de entrega?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Sim. Você pode pular qualquer semana direto no app, sem custo. É só desativar a semana até quinta-feira da semana anterior, às 16h00.",
                        ],
                    },
                ],
            },
            {
                question: "Existe número mínimo de receitas?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Não. Você pode pedir uma receita, várias ou simplesmente desativar a semana.",
                        ],
                    },
                ],
            },
            {
                question: "As receitas são para quantas pessoas?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Cada receita é individual, mas você pode configurar o número de pessoas na assinatura.",
                            "O preço será atualizado automaticamente no carrinho.",
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Receitas e Ingredientes",
        items: [
            {
                question: "O que exatamente vem no kit?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Cada receita vem com todos os ingredientes frescos e porcionados que você precisa para preparar o prato, incluindo proteínas, legumes, molhos, temperos e outros acompanhamentos.",
                            "Você também recebe a receita impressa com passo a passo, acesso ao vídeo tutorial e informações nutricionais e de alergênicos.",
                            "É importante lembrar que as receitas usam também itens básicos que você deve ter na sua cozinha: água, azeite, sal e pimenta-do-reino.",
                        ],
                    },
                ],
            },
            {
                question: "As receitas são difíceis?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Cada receita tem um nível de dificuldade baseado nas técnicas e atenção necessárias para o preparo.",
                            "Mesmo receitas com várias etapas ou técnicas diferentes são pensadas para que qualquer pessoa consiga seguir e obter um resultado delicioso.",
                            "O passo a passo impresso e o vídeo tutorial ajudam você a cozinhar com confiança, sem precisar de experiência prévia na cozinha.",
                        ],
                    },
                ],
            },
            {
                question: "Existem opções vegetarianas?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Sim. O app indica quais receitas são vegetarianas.",
                        ],
                    },
                ],
            },
            {
                question: "E alergias ou restrições?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Cada receita indica ingredientes, alergênicos e informações nutricionais.",
                            "No momento não há cardápios exclusivos sem glúten ou sem lactose.",
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Preços e Pagamento",
        items: [
            {
                question: "Quanto vou gastar por semana?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Cada receita custa a partir de R$ 45,90. Receitas especiais podem ter acréscimo, indicado antes da confirmação.",
                            "Você pode ajustar o número de pessoas, e o preço é atualizado no carrinho.",
                            "A taxa de entrega é R$ 15 por semana.",
                        ],
                    },
                ],
            },
            {
                question: "É mais caro que o mercado?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Não. Na Saboreô você não paga por desperdício nem por tempo perdido!",
                            "Você economiza porque não precisa se preocupar com ingredientes que sobram, compras em excesso, tempo e deslocamento ou planejamento de cardápio.",
                            "Você paga apenas pelos ingredientes que vai realmente usar, com a conveniência de receber tudo na medida certa em casa.",
                        ],
                    },
                ],
            },
            {
                question: "Existe fidelidade ou multa?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Não. Você pode pausar semanas ou cancelar quando quiser.",
                        ],
                    },
                ],
            },
            {
                question: "Quando é feita a cobrança?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "A cobrança acontece toda quinta-feira, referente às receitas da semana seguinte.",
                            "O pagamento é automático no cartão cadastrado e aparece no carrinho antes da confirmação.",
                        ],
                    },
                ],
            },
            {
                question: "O que fazer se o pagamento falhar?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Se o pagamento falhar, você receberá um e-mail avisando com um link para corrigir o problema.",
                            "Você pode tentar novamente ou entrar em contato para resolver o problema até quinta-feira da semana anterior, às 23h59.",
                            "Após esse prazo, não será possível fazer a cobrança e a semana será cancelada automaticamente.",
                        ],
                    },
                ],
            },
            {
                question: "Recebo nota fiscal ou comprovante?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Sim. Após cada cobrança, você recebe um comprovante por e-mail, e a nota fiscal eletrônica (NFe) é emitida conforme a legislação brasileira.",
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Entregas",
        items: [
            {
                question: "Onde a Saboreô entrega?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Atualmente entregamos nossas receitas em bairros como Pinheiros, Vila Madalena, Jardins e Moema, e em breve queremos levar a Saboreô a ainda mais regiões de São Paulo!",
                        ],
                    },
                ],
            },
            {
                question: "Quando recebo minha entrega?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "As entregas são semanais, sempre na terça-feira, para todos os assinantes. Não é necessário definir horário específico, e não há janela de entrega individual.",
                        ],
                    },
                ],
            },
            {
                question: "Preciso estar em casa para receber meu kit?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Sim. Como os kits contêm ingredientes frescos e perecíveis, alguém precisa recebê-los e guardá-los na geladeira.",
                            "Em condomínios, o porteiro ou administração pode manter a caixa até você chegar.",
                        ],
                    },
                ],
            },
            {
                question: "O que acontece se vier algo errado?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Se faltar algum ingrediente ou algo vier errado, entre em contato.",
                            "Como são alimentos frescos, não recolhemos o kit, mas sempre resolvemos o problema.",
                        ],
                    },
                ],
            },
        ],
    },
    {
        title: "Contato e Suporte",
        items: [
            {
                question: "Como falo com vocês?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Você pode entrar em contato por e-mail, telefone ou WhatsApp durante o horário comercial. Nosso time de suporte está pronto para ajudar!",
                        ],
                    },
                ],
            },
            {
                question: "O que acontece com meus dados?",
                answer: [
                    {
                        type: "text",
                        items: [
                            "Seus dados são tratados conforme a Lei Geral de Proteção de Dados (LGPD).",
                            "Você pode solicitar a exclusão a qualquer momento. Algumas informações podem ser mantidas pelo tempo exigido por lei, como notas fiscais.",
                        ],
                    },
                ],
            },
        ],
    },
];
