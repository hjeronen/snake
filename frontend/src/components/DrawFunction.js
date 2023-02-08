export const draw = (ctx, x, y, pieceWidth, pieceHeight) => {
  if (ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.beginPath()

    ctx.fillStyle = '#91C483'
    ctx.fillColor = '#91C483'
    ctx.strokeStyle = '#146356'

    ctx.fillRect(x, y, pieceWidth, pieceHeight)
    ctx.strokeRect(x, y, pieceWidth, pieceHeight)
    ctx.fill()
  }
}