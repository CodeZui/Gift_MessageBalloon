const bgMusic = document.getElementById('bgMusic');
  bgMusic.loop = true; // đảm bảo lặp
  bgMusic.volume = 0.5;
  let firstBubblePopped = false;

  const isMobile = window.innerWidth <= 768;
  const maxBubbles = isMobile ? 10 : 20;

  const messages = [
  "Chúc mừng nha, phải may mắn lắm mới có tui làm bạn đó 🎉",
  "Bạn là một người bạn rất tuyệt vời đối với tôi 💫",
  "Mong bạn sẽ luôn luôn dồi dào sức khỏe và luôn luôn thành công! 🌟",
  "Mong sao bạn luôn vượt qua mọi điều tồi tệ ✨",
  "Bạn rất may mắn, bạn được rất nhiều người yêu thương bao gồm cả tôi 💖",
  "Tại sao bạn lại giỏi giang như thế, tôi cũng muốn được giống như bạn 🦉",
  "Tôi mong bạn luôn mỉm cười và hạnh phúc 🌈",
  "Bất ngờ chưa, tôi là bất ngờ của bạn nè 🎁",
  "Sao bây giờ vẫn còn ế vậy bạn...Ahihi 😆",
  "Mong sao sớm có bồ nha ❤️‍🩹🌺",
  "Tôi nghèo quá, cho xin 50K đi 🤑",
  "Ụa alo, thân chưa mà đập bóng của tụi 🤔",
  "vui vậy thôi chứ bố dặn con này 🧔‍♂️",
  "Ngon xinh yêu của tôi đâu rồi 😘",
  "Tôi gia trưởng mới lo được cho cậu nhá 😏💸",
  "Đập mạnh lên😡...Ai sợ thì đi về💀",
  "Khó chịu vô cùng 🤬",
  "Troll troll, troll Việt Nam 🤣",
  "Tuổi trẻ chưa trải sự đời 😌",
  "Là sao dị bà 🤨",
  "Đã ai làm gì đâu, đã ai chạm vào đâu 🫠",
  "Trời tính không bằng máy tính 🖥️",
  "Nhìn bạn có nét ghê, nét đẹp trời đánh 😝",
  "Anh nhắc em nha 😏",
  "Nhìn bạn cưng quá, cưng dô lây 😝",
  "Hên lắm mới xui được như vậy á 😌",
  "Vẻ bề ngoài quan tọng đến thế sao 🤨😭",
  "Bất ngờ chưa bà già 🤣",
  "<img src='https://i.pinimg.com/originals/6b/1e/b7/6b1eb75915c0359234e21b6557120279.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/38/83/8d/38838d2369fe10f9e3f03e92bde4883c.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/2e/3c/43/2e3c439e7b58c00d9e787341dbb28c94.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/10/13/ed/1013ed0057e43990f95d8aa4226fd79f.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/28/b2/7a/28b27a8cbe44c6ab00c2b3e43fd72e72.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/da/e5/01/dae501c90db93a4e09b6f015f3c5c68c.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/bc/33/f3/bc33f3bc72f43ca1045b7c4f98dc760d.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/df/d5/4a/dfd54ac370b9b2902a59a464d9e4d345.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/c5/f6/3d/c5f63dee088c913fae151a27e5c30cdc.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/40/cc/30/40cc3065c2659744c81210dbb3882a61.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/40/8d/fd/408dfd158ce15ab75ffa57faa2873939.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/a2/9b/81/a29b813b2395ebe6b734489a308735c1.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/b2/23/e6/b223e62ba4d787bcc53b79a85508b77e.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/db/d7/f4/dbd7f458b77f7f1a7ad712dbaf9c4a4f.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/29/37/17/293717f5964be70b72d7781b0847c62b.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/38/7a/93/387a93b81b36b7563ec0425d57ef78e1.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/5b/1c/f1/5b1cf1a355c71dfbef79bff030db005c.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/a6/62/2d/a6622dfaee5d281cf341d264fa2b3aa2.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/79/fd/49/79fd49f5ea1d4580f44465bac138820a.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/eb/db/36/ebdb3635843244ec609786583ddf6863.gif' width='100' />",
  "<img src='https://i.pinimg.com/originals/16/10/ad/1610adbfb7deba9bd65ae35b4eeb960b.gif' width='100' />"
];


  const colors = [
    'rgba(255, 99, 132, 0.8)',  
    'rgba(54, 162, 235, 0.8)',  
    'rgba(75, 192, 192, 0.8)',  
    'rgba(255, 206, 86, 0.8)',  
    'rgba(255, 159, 64, 0.8)',  
    'rgba(153, 102, 255, 0.8)', 
    'rgba(255, 192, 203, 0.8)', 
    'rgba(144, 238, 144, 0.8)',
    'rgba(0, 191, 255, 0.8)',    
    'rgba(255, 105, 180, 0.8)', 
    'rgba(255, 140, 0, 0.8)',    
    'rgba(0, 255, 127, 0.8)',    
    'rgba(186, 85, 211, 0.8)',   
    'rgba(255, 20, 147, 0.8)',   
    'rgba(70, 130, 180, 0.8)',   
    'rgba(210, 105, 30, 0.8)',   
    'rgba(173, 255, 47, 0.8)',   
    'rgba(255, 250, 205, 0.8)',  
    'rgba(72, 209, 204, 0.8)'     
  ];

  let bubbles = [];

  class Bubble {
    constructor() {
      this.element = document.createElement('div');
      this.element.className = 'bubble';
      this.size = 150;
      this.element.style.width = this.size + 'px';
      this.element.style.height = this.size + 'px';

      this.x = Math.random() * (window.innerWidth - this.size);
      this.y = Math.random() * (window.innerHeight - this.size);
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;

      const colorIndex = Math.floor(Math.random() * colors.length);
      this.color = colors[colorIndex];
      this.element.style.background = this.color;

      this.messageIndex = Math.floor(Math.random() * messages.length);
      this.mass = 1;
      this.clicked = false;

      this.updatePosition();

      this.element.addEventListener('click', () => {
        if (!this.clicked) {
          if (!firstBubblePopped) {
            bgMusic.play().catch(() => {});  
            firstBubblePopped = true;
          }
          this.clicked = true;
          this.vx = 0;
          this.vy = 0;
          this.createRipple();
          this.createParticles();

          // Phá bóng ngay lập tức
          this.destroy();

          // Hiện tin nhắn sau khi bóng biến mất
          this.showFloatingMessage();

          // Sau 2s sinh thêm bóng mới
          setTimeout(() => {
            createBubble();
          }, 2000);
        }
      });

      document.querySelector('.container').appendChild(this.element);
    }

    updatePosition() {
      this.element.style.left = this.x + 'px';
      this.element.style.top = this.y + 'px';
    }

    move() {
      if (this.clicked) return;
      this.x += this.vx;
      this.y += this.vy;

      if (this.x <= 0 || this.x + this.size >= window.innerWidth) {
        this.vx *= -1;
        this.bounce();
      }

      if (this.y <= 0 || this.y + this.size >= window.innerHeight) {
        this.vy *= -1;
        this.bounce();
      }

      this.updatePosition();
    }

    bounce() {
      this.element.classList.add('collision');
      setTimeout(() => this.element.classList.remove('collision'), 300);
    }

    checkCollision(other) {
      if (this === other || this.clicked || other.clicked) return false;
      const dx = (this.x + this.size / 2) - (other.x + other.size / 2);
      const dy = (this.y + this.size / 2) - (other.y + other.size / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < this.size;
    }

    collideWith(other) {
      const dx = (other.x + other.size / 2) - (this.x + this.size / 2);
      const dy = (other.y + other.size / 2) - (this.y + this.size / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance === 0) return;

      const nx = dx / distance, ny = dy / distance;
      const dvx = other.vx - this.vx;
      const dvy = other.vy - this.vy;
      const dot = dvx * nx + dvy * ny;

      if (dot > 0) return;

      const impulse = (2 * dot) / (this.mass + other.mass);
      const restitution = 1;

      this.vx += impulse * other.mass * nx * restitution;
      this.vy += impulse * other.mass * ny * restitution;
      other.vx -= impulse * this.mass * nx * restitution;
      other.vy -= impulse * this.mass * ny * restitution;

      this.bounce();
      other.bounce();
    }

    createRipple() {
      const ripple = document.createElement('div');
      ripple.className = 'ripple-effect';
      ripple.style.width = this.size + 'px';
      ripple.style.height = this.size + 'px';
      ripple.style.left = this.x + 'px';
      ripple.style.top = this.y + 'px';
      document.querySelector('.container').appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    }

    createParticles() {
      const centerX = this.x + this.size / 2;
      const centerY = this.y + this.size / 2;
      for (let i = 0; i < 12; i++) {
        const p = document.createElement('div');
        p.style.position = 'absolute';
        p.style.width = '8px';
        p.style.height = '8px';
        p.style.borderRadius = '50%';
        p.style.background = colors[Math.floor(Math.random() * colors.length)];
        p.style.left = centerX + 'px';
        p.style.top = centerY + 'px';
        p.style.pointerEvents = 'none';
        p.style.zIndex = '1001';
        document.querySelector('.container').appendChild(p);

        const angle = (Math.PI * 2 * i) / 12;
        const velocity = Math.random() * 150 + 100;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;

        let x = 0, y = 0, opacity = 1;
        const animate = () => {
          x += vx * 0.016;
          y += vy * 0.016 + 3;
          opacity -= 0.02;
          p.style.transform = `translate(${x}px, ${y}px)`;
          p.style.opacity = Math.max(0, opacity);
          if (opacity > 0) requestAnimationFrame(animate);
          else p.remove();
        };
        requestAnimationFrame(animate);
      }
    }

    showFloatingMessage() {
      const msg = messages[this.messageIndex];
      const m = document.createElement('div');
      m.className = 'floating-message';
      m.innerHTML = `${msg}`;
      // Điều chỉnh vị trí để message không bị quá sát mép phải
      let leftPos = this.x + this.size / 2;
      if (leftPos + 280 > window.innerWidth) leftPos = window.innerWidth - 300;
      m.style.left = leftPos + 'px';
      m.style.top = this.y + this.size / 2 + 'px';
      document.querySelector('.container').appendChild(m);
      setTimeout(() => m.remove(), 5000);
    }


    destroy() {
      this.element.remove();
      const index = bubbles.indexOf(this);
      if (index > -1) {
        bubbles.splice(index, 1);
      }
    }
  }

  function animate() {
    bubbles.forEach(b => b.move());
    for (let i = 0; i < bubbles.length; i++) {
      for (let j = i + 1; j < bubbles.length; j++) {
        if (bubbles[i].checkCollision(bubbles[j])) {
          bubbles[i].collideWith(bubbles[j]);
        }
      }
    }
    requestAnimationFrame(animate);
  }

  function createBubble() {
    if (bubbles.length >= maxBubbles) return;

    let tries = 100;
    let bubble;
    while (tries-- > 0) {
      bubble = new Bubble();
      if (!isOverlapping(bubble)) {
        bubbles.push(bubble);
        return;
      } else {
        bubble.destroy();
      }
    }
  }

  function isOverlapping(newBubble) {
    const newX = newBubble.x + newBubble.size / 2;
    const newY = newBubble.y + newBubble.size / 2;
    return bubbles.some(b => {
      const x = b.x + b.size / 2;
      const y = b.y + b.size / 2;
      const dist = Math.sqrt((x - newX) ** 2 + (y - newY) ** 2);
      return dist < b.size;
    });
  }

  // Tạo ban đầu 10 quả bóng
  for (let i = 0; i < 20; i++) {
    setTimeout(createBubble, i * 150);
  }

  // Bắt đầu vòng lặp animation
  animate();
