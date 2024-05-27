using System;
using System.Collections.Generic;
using FakeStore.Models;
using Microsoft.EntityFrameworkCore;

namespace FakeStore.Context;

public partial class FakeStoreContext : DbContext
{
    public FakeStoreContext()
    {
    }
    public FakeStoreContext(DbContextOptions<FakeStoreContext> options)
        : base(options)
    {
    }
    public virtual DbSet<Cliente> Clientes { get; set; }
    public virtual DbSet<Estado> Estados { get; set; }
    public virtual DbSet<Factura> Facturas { get; set; }
    public virtual DbSet<MediosDePago> MediosDePagos { get; set; }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Data Source=NOTSANTIAGO\\THIAGO;Initial Catalog=FakeStore;Integrated Security=true;Encrypt=True;TrustServerCertificate=true;");
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Factura>(entity =>
        {
            entity.HasIndex(e => e.ClienteId, "IX_Facturas_ClienteId");
            entity.HasIndex(e => e.EstadoId, "IX_Facturas_EstadoId");
            entity.HasIndex(e => e.MedioDePagoId, "IX_Facturas_MedioDePagoId");
            entity.Property(e => e.Saldo).HasColumnType("decimal(18, 2)");
            entity.Property(e => e.Valor).HasColumnType("decimal(18, 2)");
            entity.HasOne(d => d.Cliente).WithMany(p => p.Facturas).HasForeignKey(d => d.ClienteId);
            entity.HasOne(d => d.Estado).WithMany(p => p.Facturas).HasForeignKey(d => d.EstadoId);
            entity.HasOne(d => d.MedioDePago).WithMany(p => p.Facturas).HasForeignKey(d => d.MedioDePagoId);
        });
        OnModelCreatingPartial(modelBuilder);
    }
    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}