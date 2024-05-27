using Microsoft.EntityFrameworkCore;
using FakeStore.Context;
using FakeStore.Models;
using System.Globalization;

namespace FakeStore.Services
{
    public class FacturaService
    {
        private readonly FakeStoreContext _context;

        public FacturaService(FakeStoreContext context)
        {
            _context = context;
        }

        public async Task<bool> Actualizar(Factura model)
        {
            bool result = default(bool); 

            int facturaId = model.Id;

            if (facturaId == 0 || facturaId == null) return result;

            try
            {
                Factura factura = await Leer(facturaId);

                decimal saldo;
                saldo = Convert.ToDecimal(model.Saldo, CultureInfo.InvariantCulture);

                factura.Saldo = saldo;
                factura.ClienteId = model.ClienteId;                
                factura.MedioDePagoId = model.MedioDePagoId;
                factura.EstadoId = model.EstadoId;

                _context.Facturas.Update(factura); 
                await _context.SaveChangesAsync(); 

                return !result; 
            }
            catch (Exception ex) 
            {
                return result; 
            }

        }

        public async Task<bool> Eliminar(int id)
        {
            bool result = default(bool); 

            if (id == default(int)) return result;

            var factura = _context.Facturas.FirstOrDefault(f => f.Id == id); 

            if (factura == null) return result; 

            try
            {
                _context.Facturas.Remove(factura); 
                await _context.SaveChangesAsync(); 

                return !result; 
            }
            catch (Exception ex) 
            {
                return result; 
            }
        }

        public async Task<bool> Insertar(Factura model)
        {
            bool result = default(bool); 

            try
            {
                _context.Facturas.Add(model);
                await _context.SaveChangesAsync();

                return !result; 
            }
            catch (Exception ex) 
            {
                return result; 
            }
        }

        public async Task<Factura> Leer(int id)
        {
            if (id == default(int)) return null; 

            Factura factura = await _context.Facturas.FirstOrDefaultAsync(f => f.Id == id);  

            if (factura == null) return null; 

            return factura; 
        }

        public async Task<IQueryable<Factura>> LeerTodos()
        {
            IQueryable<Factura> listaDeFacturas = _context.Facturas; // Obtener todas las facturas del contexto


            return listaDeFacturas; 
        }
        
        public List<Cliente> ObtenerClientes()
        {
            List<Cliente> listaDeClientes = _context.Clientes.ToList();

            return listaDeClientes;
        }

        public List<Estado> ObtenerEstados()
        {
            List<Estado> listaDeEstados = _context.Estados.ToList();

            return listaDeEstados;
        }

        public List<MediosDePago> ObtenerMediosDePago()
        {
            List<MediosDePago> listaDeMediosDePago = _context.MediosDePagos.ToList();

            return listaDeMediosDePago;
        }

    }
}
