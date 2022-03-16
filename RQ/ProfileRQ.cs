using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BidOneCodingTest.RQ
{
    public class ProfileRQ
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }
    }

    public class ProfileRes
    {
        public int Status { get; set; }

        public string Error { get; set; }
    }
}
