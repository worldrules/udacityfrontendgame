// Inimigos que nosso jogador deve evitar
var Enemy = function (x, y, speed) {
    // As variáveis aplicadas a nossas instâncias entram aqui.
    // Fornecemos uma a você para que possa começcar.

    // A imagem/sprite de nossos inimigos, isso usa um
    // ajudante que é fornecido para carregar imagens
    // com facilidade.
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y + 55; // center
    this.step = 101;
    this.limit = this.step * 5;
    this.resetPos = -this.step;
    this.speed = speed;
};


//Propriedades
// x pos
// y pos
// Sprite Image

//Metodos

// Atualiza Posição

//Verificador de colisoes
//E se o Player colidir com o inimigo ?
//Verificar se o player Ganhou o jogo
//E se o Player chegar o final da tela ?




// Handle Keyboard Input
//Atualiza as coordenadas para o Player x e y de acordo com input do usuario

// Resetar o Hero
//Colocar x e y como iniciando em x e y


// Classe Hero ou Player
// Construtor
class Hero {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.step = 101;
        this.jump = 83;
        this.startX = this.step * 2;
        this.startY = (this.jump * 5) - 20;
        this.x = this.startX;
        this.y = this.startY;
    }

    // Render
    //Desenha o Player na posicao x e y
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }


    /*
    Atualiza a posição do Hero para x e y de acordo com input do usuário
    *@param {string} input = Direção para qual o hero irá.
    */
    handleInput(input) {
        switch (input) {
            case 'left':
                if (this.x > 0) {
                    this.x -= this.step;
                }
                break;

            case 'up':
                if (this.y > this.jump) {
                    this.y -= this.jump;

                }
                break;

            case 'right':
                if (this.x < this.step * 4) {
                    this.x += this.step;
                }
                break;

            case 'down':
                if (this.y < this.jump * 4) {
                    this.y += this.jump;
                }
                break;

        }
    }

}

const player = new Hero();
const bug = new Enemy(-101, 0, 200);
const bug2 = new Enemy(-101, 83, 300);
const bug3 = new Enemy(-101 * 2.5, 83, 300);
const allEnemies = [];
allEnemies.push(bug, bug2, bug3);
console.log(allEnemies);





// Atualize a posição do inimigo, método exigido pelo jogo
// Parâmetro: dt, um delta de tempo entre ticks
Enemy.prototype.update = function (dt) {
    // Você deve multiplicar qualquer movimento pelo parâmetro
    // dt, o que garantirá que o jogo rode na mesma velocidade
    // em qualquer computador.

    //O inimigo não passou do limite
    if (this.x < this.limit) {
        //Anda pra frente
        //Aumenta x pela velocidade * dt
        this.x += this.speed * dt;
    } else {
        //reseta a posição
        this.x = this.resetPos;
    }
};

// Desenhe o inimigo na tela, método exigido pelo jogo
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Agora, escreva sua própria classe de jogador
// Esta classe exige um método update(), 
// um render() e um handleInput().




// Represente seus objetos como instâncias.
// Coloque todos os objetos inimgos numa array allEnemies
// Coloque o objeto do jogador numa variável chamada jogador.



// Isto reconhece cliques em teclas e envia as chaves para seu
// jogador. método handleInput(). Não é preciso mudar nada.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});