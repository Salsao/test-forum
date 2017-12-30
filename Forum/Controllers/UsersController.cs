using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Forum.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Forum.Controllers
{
    [Route("api/users")]
    public class UsersController : Controller
    {
        private readonly MvcForumContext context;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public UsersController(
            MvcForumContext context,
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            this.context = context;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpGet]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await context.Users.ToListAsync();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(UserCreate model)
        {
            if (ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(model.Name,
                    model.Password, isPersistent: false, lockoutOnFailure: false);
            }
            return Ok(model);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LogOut()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] UserCreate userCreate)
        {
            var newUser = new ApplicationUser
            {
                UserName = userCreate.Name
            };
            var result = await _userManager.CreateAsync(newUser, userCreate.Password);
            await _signInManager.SignInAsync(newUser, isPersistent: false);

            //User user = new User
            //{
            //    Name = userCreate.Name,
            //    Password = userCreate.Password
            //};

            //context.Users.Add(user);
            //var result = await context.SaveChangesAsync();

            return Ok(result);
        }
    }
}
