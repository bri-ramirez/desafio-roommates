export const validateGasto = (req) => {
  if (!req.body.roommate) {
    throw new Error("El campo 'roommate' es requerido");
  }

  if (!req.body.descripcion) {
    throw new Error("El campo 'descripcion' es requerido");
  }

  if (!req.body.monto) {
    throw new Error("El campo 'monto' es requerido");
  }
}
