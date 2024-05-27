namespace FakeStore.Models
{
    public class Cliente
    {
        public int Id { get; set; }

        public int? PersonaId { get; set; }

        public int? RolId { get; set; }

        public DateTime? FechaDeCreacion { get; set; }

        public virtual ICollection<Factura> Facturas { get; set; } = new List<Factura>();
    }
}
