function gameOver() {
    background(0);

    // Draw and update stars
    stars.forEach((star) => {
        star.show();
        star.update();
    });

    // Draw ship
    ship.show();
    
    // Draw oct
    Octs.forEach((Oct) => {
        Oct.show();
    });
    
    textAlign(CENTER);
    textSize(64);
    fill(255);
    stroke(0, 200, 0);
    text('Game Over', width / 2, height / 2);
}