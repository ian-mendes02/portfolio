class Description {
    constructor(serviceTitleText, serviceDescriptionText, servicePriceText) {
        this.serviceTitleText = serviceTitleText;
        this.serviceDescriptionText = serviceDescriptionText;
        this.servicePriceText = servicePriceText;
    };

    getIndex(index) {
        this.serviceNumber = index
    };

    getName(name) {
        this.titleName = name
    }; 

    getDescription() {
        // const titleData = descriptData.map(value => value.title).at(this.serviceNumber);
        const descriptionData = descriptData.map(value => value.description).at(this.serviceNumber);
        const priceData = descriptData.map(value => value.price).at(this.serviceNumber);   
        this.serviceTitle = this.titleName;
        this.serviceDescription = descriptionData;
        this.servicePrice = priceData;
    };

    updateDescription() {
        this.serviceTitleText.text(this.serviceTitle);
        this.serviceDescriptionText.text(this.serviceDescription);
        this.servicePriceText.text(this.servicePrice);
    }

};

            const serviceTitleText = $('[data-service-title]');
            const serviceDescriptionText = $('[data-service-description]');
            const serviceName = $('.service-list-item').innerText;
            const servicePriceText = $('.service-price');
        
            const servicePanel = $('[data-service-panel]');
            const defaultPanel = $('[data-default-panel]');
            const serviceContent = $('.service-content');

            const panelToggle = $('[data-panel-toggle]');
            const listItem = $('.service-list-item');
            const serviceBox = $('.service-box');
            const description = new Description(serviceTitleText, serviceDescriptionText, servicePriceText);
    

            function toggleExpand(panel) {
                if (panel.style.height) {
                    panel.style.height = null;
                    panel.parentElement.classList.remove('box-expanded');
                    panel.parentElement.classList.add('box-collapsed');
                    setTimeout(function() {
                    panel.lastElementChild.previousElementSibling.classList.add('hidden');
                    panel.lastElementChild.classList.remove('hidden')}, 500)
                } else {
                    panel.style.height = 70 + 'vh';
                    panel.parentElement.classList.remove('box-collapsed');
                    panel.parentElement.classList.add('box-expanded');
                    panel.lastElementChild.previousElementSibling.classList.add('hidden');
                    panel.lastElementChild.classList.remove('hidden')
                }
            };

            function collapseNeighbors() {
                const panels = serviceContent;
                for (const panel of panels) {
                    if (panel.classList.contains('active')) {
                        panel.classList.remove('active');
                        panel.previousElementSibling.classList.remove('clicked');                        
                        toggleExpand(panel);   
                    }
                }
            };

            function clearDescription() {
                if (servicePanel.hasClass('hidden')) { return;
                } else {
                    servicePanel.addClass('hidden');
                    defaultPanel.removeClass('hidden');
                }
            };

        
            listItem.click(function() {
                defaultPanel.addClass('hidden');
                servicePanel.removeClass('hidden');
                const indexNumber = JSON.stringify(parseInt(this.dataset.number));
                description.getName(this.innerText);
                description.getIndex(indexNumber);
                description.getDescription();
                description.updateDescription()
    });


            panelToggle.click(function(e) {
                if (!this.nextElementSibling.classList.contains('active')) {
                collapseNeighbors();
                };
                this.nextElementSibling.classList.toggle('active');
                this.classList.toggle('clicked');
                toggleExpand(this.nextElementSibling);
            });
            
            const descriptData = [];
                descriptData [1] = {
                    description: 'Concepção e criação de logomarcas.',
                    price: 'R$ 300.'
                };
                descriptData [2] = {
                    description: 'Concepção e desenvolvimento de website. A hospedagem será responsabilidade do cliente.',
                    price: 'R$ 1200.'
                };
                descriptData [3] = {
                    description: 'Criação de posts para redes sociais para divulgação de eventos, cursos, produtos, entre outros.',
                    price: 'R$ 50/ post individual, ou R$ 360/ mês com 2 posts por semana.'
                };
                descriptData [4] = {
                    description: 'Produção de vinhetas animadas para conteúdo audiovisual.',
                    price: 'R$ 100/ minuto de animação.'
                };
                descriptData [5] = {
                    description: 'Animação de arte vetorizada para logos, vinhetas, entre outros.',
                    price: 'R$ 100/ minuto de animação.'
                };
                descriptData [6] = {
                    description: 'Design de folder para impressão.',
                    price: 'R$ 50/ página.'
                };
                descriptData [7] = {
                    description: 'Design de flyer para impressão ou divulgação online.',
                    price: 'R$ 50/ página.'
                };
                descriptData [8] = {
                    description: 'Design de cartão de visita para impressão ou divulgação online.',
                    price: 'R$ 50.'
                };
                descriptData [9] = {
                    description: 'Design de banner para impressão, canal de YouTube, entre outros.',
                    price: 'R$ 100.'
                };
                descriptData [10] = {
                    description: 'Caricaturas feitas sob encomenda.',
                    price: 'R$ 60 (base), sujeito a alteração com base no grau de complexidade.'
                };
                descriptData [11] = {
                    description: 'Ilustração completa. O valor do serviço estará sujeito a alteração com base no grau de complexidade e no número de elementos do conteúdo. Para mais informações, entre em contato comigo através do menu de contato abaixo.',
                    price: 'R$ 100 (base).'
                };
                descriptData [12] = {
                    description: 'Ilustração em vector para uso em websites e criativos.',
                    price: 'R$ 60 (base), sujeito a alteração com base no grau de complexidade.'
                };
                descriptData [13] = {
                    description: 'Concepção e ilustração de mascotes para marcas, empresas, entre outros.',
                    price: 'R$ 150.'
                };
                descriptData [14] = {
                    description: 'Criação de ícones para uso em websites e criativos.',
                    price: 'R$ 50/ ícone.'
                };
                descriptData [15] = {
                    description: 'Edição de imagens e fotografias ou correção de arte.',
                    price: 'R$ 50/imagem.'
                };
                descriptData [16] = {
                    description: 'Edição de vídeos. Cortes, sincronização de áudio, inclusão de vinhetas e efeitos sonoros.',
                    price: 'R$ 10/min de vídeo.'
                };
                descriptData [17] = {
                    description: 'Alterações de conteúdo de website.',
                    price: 'R$ 20 para alterações pequenas (texto, imagens, etc.), R$ 100 para alterações de layout. Para reconstrução completa, consulte o item "Criação de Website" no menu "Criação de Conteúdo".'  
                };
                descriptData [18] = {
                    description: 'Edição, formatação e configuração do layout de materiais impressos ou e-books',
                    price: 'R$ 20/página.'
                };
                descriptData [19] = {
                    description: 'Concepção e desenvolvimento da identidade visual de uma marca, projeto ou empresa. Inclui pesquisa de mercado, paleta de cores e concepção de estilo. Para logomarcas e conteúdo para divulgação, consulte o menu "Criação de Conteúdo" acima.',
                    price: 'R$ 200 de preço base somado ao valor dos demais serviços desejados.'
                };
                descriptData [20] = {
                    description: 'Concepção e desenvolvimento de personagens originais. Inclui criação de presonagem e esboços conceituais, para ilustrações completas, consulte o menu "Ilustração" acima.',
                    price: 'R$ 100/personagem'
                };
                const categoryData = [];
                categoryData [1] = {
                    name: 'Criação de conteúdo',
                    description: 'Criação e produção de conteúdo original'
                };
                categoryData [2] = {
                    name: 'Ilustração',
                    description: 'Ilustrações feitas sob encomenda.'
                };
                categoryData [3] = {
                    name: 'Edição de material',
                    description: 'Edição de material preexistente.'
                };
                categoryData [4] = {
                    name: 'Desenvolvimento visual',
                    description: 'Concepção de temas, elementos ou personagens.'
                };
               


                $('[data-default-title-1]').text(categoryData.map(value => value.name).at(1));
                $('[data-default-description-1]').text(categoryData.map(value => value.description).at(1));

                $('[data-default-title-2]').text(categoryData.map(value => value.name).at(2));
                $('[data-default-description-2]').text(categoryData.map(value => value.description).at(2));

                $('[data-default-title-3]').text(categoryData.map(value => value.name).at(3));
                $('[data-default-description-3]').text(categoryData.map(value => value.description).at(3));

                $('[data-default-title-4]').text(categoryData.map(value => value.name).at(4));
                $('[data-default-description-4]').text(categoryData.map(value => value.description).at(4));