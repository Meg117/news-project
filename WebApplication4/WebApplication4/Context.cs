
using Microsoft.EntityFrameworkCore;

namespace EFCoreCodeFirstSample.Models
{
    public class UserContext : DbContext
    {
        

        public UserContext(DbContextOptions options)
            : base(options)
        {

        }

        public DbSet<Userlogin> Userlogin { get; set; }
    }
}