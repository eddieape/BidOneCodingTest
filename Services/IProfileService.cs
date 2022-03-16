using BidOneCodingTest.RQ;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BidOneCodingTest.Services
{
    public interface IProfileService
    {
        Task<ProfileRes> SavePersonalInfo(ProfileRQ request);
    }
}
