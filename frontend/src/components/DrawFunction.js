export const draw = (ctx, snake, treat, pieceWidth, pieceHeight) => {
  if (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.beginPath()

    ctx.fillStyle = '#0000FF'
    ctx.fillColor = '#0000FF'
    ctx.strokeStyle = '#146356'

    // treat
    ctx.fillRect(treat.x, treat.y, pieceWidth, pieceHeight)
    ctx.strokeRect(treat.x, treat.y, pieceWidth, pieceHeight)

    ctx.fillStyle = '#91C483'
    ctx.fillColor = '#91C483'
    ctx.strokeStyle = '#146356'

    // snake
    ctx.fillRect(snake.x, snake.y, pieceWidth, pieceHeight)
    ctx.strokeRect(snake.x, snake.y, pieceWidth, pieceHeight)

    ctx.fill()
  }
}