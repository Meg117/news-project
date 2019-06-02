
using System.Collections.Generic;
using EFCoreCodeFirstSample.Models;
using EFCoreCodeFirstSample.Models.Repository;
using Microsoft.AspNetCore.Mvc;

namespace EFCoreCodeFirstSample.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IDataRepository<Userlogin> _dataRepository;

        public UserController(IDataRepository<Userlogin> dataRepository)
        {
            _dataRepository = dataRepository;
        }

      
        [HttpGet]
        public IActionResult Get()
        {
            IEnumerable<Userlogin> user = _dataRepository.GetAll();
            return Ok(user);
        }

       
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(long id)
        {
            Userlogin user = _dataRepository.Get(id);

            if (user == null)
            {
                return NotFound("The Employee record couldn't be found.");
            }

            return Ok(user);
        }

       
        [HttpPost]
        public IActionResult Post([FromBody] Userlogin user)
        {
            if (user == null)
            {
                return BadRequest("User is null.");
            }

            _dataRepository.Add(user);
            return CreatedAtRoute(
                  "Get",
                  new { Id = user.usersId },
                  user);
        }

        
        [HttpPut("{id}")]
        public IActionResult Put(long id, [FromBody] Userlogin user)
        {
            if (user == null)
            {
                return BadRequest("User is null.");
            }

            Userlogin userToUpdate = _dataRepository.Get(id);
            if (userToUpdate == null)
            {
                return NotFound("The User record couldn't be found.");
            }

            _dataRepository.Update(userToUpdate, user);
            return NoContent();
        }

       
        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            Userlogin user = _dataRepository.Get(id);
            if (user == null)
            {
                return NotFound("The User record couldn't be found.");
            }

            _dataRepository.Delete(user);
            return NoContent();
        }
    }
}