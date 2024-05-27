namespace FakeStore.Models
{
    public class Factura
    {
        public int Id { get; set; }

        public decimal? Saldo { get; set; }

        public int? ClienteId { get; set; }

        public int? ServicioAdquiridoId { get; set; }

        public int? MedioDePagoId { get; set; }

        public decimal Valor { get; set; }
        public int? EstadoId { get; set; }

        public DateTime? FechaDeCreacion { get; set; }

        public virtual Cliente? Cliente { get; set; }        

        public virtual Estado? Estado { get; set; }

        public virtual MediosDePago? MedioDePago { get; set; }

        
    }
}
