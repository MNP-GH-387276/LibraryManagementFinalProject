using LibraryManagement.Data;
using LibraryManagement.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;
        private readonly IConfiguration configuration;

        public CategoryController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategory()
        {
            return await dbContext.Category.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Category>> PostAuthor(Category category)
        {
            dbContext.Category.Add(category);
            await dbContext.SaveChangesAsync();
            return CreatedAtAction("GetCategory", new { id = category.Id }, category);
        }
    }
}
