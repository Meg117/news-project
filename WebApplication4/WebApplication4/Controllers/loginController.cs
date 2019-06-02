using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFCoreCodeFirstSample.Models;
using EFCoreCodeFirstSample.Models.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication4.Controllers
{
    [Route("api/login")]
    [ApiController]
  
    public class loginController : ControllerBase
    {
        private readonly IDataRepository<Userlogin> _dataRepository;
        public loginController(IDataRepository<Userlogin> dataRepository)
        {
            _dataRepository = dataRepository;
        }

        [HttpGet("{user_name}/{pass_word}")]
        public IActionResult Get(string userName,string passWord)
        {
            var val = _dataRepository.IsvalidUser(userName,passWord);
            return Ok(val);
        }
    }}