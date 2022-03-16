using BidOneCodingTest.RQ;
using BidOneCodingTest.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BidOneCodingTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfileController : ControllerBase
    {
        private readonly IProfileService _profileService;

        public ProfileController(IProfileService profileService)
        {
            _profileService = profileService;
        }

        // POST /api/profile
        public async Task<ActionResult<ProfileRes>> SavePersonalInfo(ProfileRQ req)
        {
            return await _profileService.SavePersonalInfo(req);
        }
    }
}
