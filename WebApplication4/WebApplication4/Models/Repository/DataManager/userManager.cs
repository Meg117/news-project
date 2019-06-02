
using System.Collections.Generic;
using System.Linq;
using EFCoreCodeFirstSample.Models.Repository;

namespace EFCoreCodeFirstSample.Models.DataManager
{
    public class UserManager : IDataRepository<Userlogin>
    {
        readonly UserContext _userContext;

        public UserManager(UserContext context)
        {
            _userContext = context;
        }

        public IEnumerable<Userlogin> GetAll()
        {
            return _userContext.Userlogin.ToList();
        }

        public Userlogin Get(long id)
        {
            return _userContext.Userlogin
                  .FirstOrDefault(e => e.usersId == id);
        }

        public void Add(Userlogin entity)
        {
            _userContext.Userlogin.Add(entity);
            _userContext.SaveChanges();
        }

        public void Update(Userlogin user, Userlogin entity)
        {
            user.userName = entity.userName;
            user.passWord = entity.passWord;

            _userContext.SaveChanges();
        }

        public void Delete(Userlogin user)
        {
            _userContext.Userlogin.Remove(user);
            _userContext.SaveChanges();
        }


        public bool IsvalidUser(string userName, string passWord)
        {
           
            var query=from p in _userContext.Userlogin
                        where p.userName == userName
                        && p.passWord == passWord
                        select p;

            if (query.Any())
            {
                return true;
            }
            else
            {
                return false;
            }
          
        }


    }
}