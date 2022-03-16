using BidOneCodingTest.RQ;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace BidOneCodingTest.Services
{
    public class ProfileService : IProfileService
    {

        private readonly IWebHostEnvironment _env;

        public ProfileService(IWebHostEnvironment env)
        {
            _env = env;
        }

        public async Task<ProfileRes> SavePersonalInfo(ProfileRQ request)
        {
            ProfileRes res = new ProfileRes();
            res.Status = 0;
            res.Error = "";

            try
            {
                var physicalPath = _env.ContentRootPath + "/Profiles/profiledata.txt";
                using (FileStream stream = new FileStream(physicalPath, FileMode.Create))
                {
                    await JsonSerializer.SerializeAsync(stream, request);
                    await stream.DisposeAsync();
                }
                res.Error = File.ReadAllText(physicalPath);
            }
            catch (Exception e)
            {
                res.Status = -1;
                res.Error = e.Message;
            }

            return await Task.FromResult(res);
        }
    }
}
