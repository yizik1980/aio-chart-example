using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebGraphApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InvoiceController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Auction Utilty Expance", "Child Room Closet", "Elevator Engine", "Ford Viecle", "Sailr Boat", "wood Fience", "Toys To Play", "Grocoriess", "Lalop pop ", "Garache Expense"
        };

        private readonly ILogger<InvoiceController> _logger;

        public InvoiceController(ILogger<InvoiceController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Invoice> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 7).Select(index => new Invoice
            {
                Date = DateTime.Now.AddDays(index),
                Price = rng.Next(-20, 55) * Math.Round(rng.NextDouble(),2),
                Description = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
