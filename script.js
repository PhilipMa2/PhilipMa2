particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const instance = new TypeIt('#typewriter', {
  speed: 100,
  lifelike: true,
  loop: true
})
  .type('<span style="font-family: Segoe UI Emoji">😄</span>', {
    html: true
  })
  .type("Hello World!<br>I'm Philip Ma,")
  .pause(1000)
  .move(-4)
  .delete(6)
  .move(3)
  .type(" Yueran")
  .move(1)
  .pause(1000)
  .delete()
  .type('an aspiring Programmer.')
  .pause(1000)
  .delete()
  .go();
