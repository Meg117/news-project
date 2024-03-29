﻿
using System.Collections.Generic;

namespace EFCoreCodeFirstSample.Models.Repository
{
    public interface IDataRepository<TEntity>
    {
        IEnumerable<TEntity> GetAll();
        TEntity Get(long id);
        void Add(TEntity entity);
        void Update(TEntity dbEntity, TEntity entity);
        void Delete(TEntity entity);
        bool IsvalidUser(string userName,string passWord);
    }
}