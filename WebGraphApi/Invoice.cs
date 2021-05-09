using System;

namespace WebGraphApi
{
    public class Invoice
    {
        public DateTime Date { get; set; }

        public double Price { get; set; }

        public double PriceWithTaxes=>  (Price * 1.17);

        public string Description { get; set; }
    }
}
