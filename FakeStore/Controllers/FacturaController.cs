﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FakeStore.Models;
using FakeStore.Services;

namespace FakeStore.Controllers
{
    [Route("api/[controller]")] 
    [ApiController]

    public class FacturaController : ControllerBase
    { 
        private readonly FacturaService _facturaService;

        public FacturaController(FacturaService facturaService)
        {
            _facturaService = facturaService;
        }
   
        [HttpGet]
        public async Task<IActionResult> GetFacturas()
        {
            var facturas = await _facturaService.LeerTodos();
            return Ok(facturas);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFactura(int id)
        {
            var factura = await _facturaService.Leer(id);
            if (factura == null)
            {
                return NotFound();
            }
            return Ok(factura);
        }

        [HttpPost]
        public async Task<IActionResult> CrearFactura([FromBody] Factura model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var result = await _facturaService.Insertar(model);
            if (!result)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> ActualizarFactura(int id, [FromBody] Factura model)
        {
            if (id != model.Id)
            {
                return BadRequest();
            }

            var result = await _facturaService.Actualizar(model);
            if (!result)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            return NoContent();
        }

        [HttpPatch("{id}")]
        public void Patch(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}