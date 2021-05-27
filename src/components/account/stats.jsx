import React, { useState, useEffect } from 'react';

const Stats = ({ data, userCount }) => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setSchedule(data);
  }, [data]);

  return (
    <section className="bg-purple-900 select-none">
      <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-4 py-8 text-center">
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">{schedule.length}</span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Leads</p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">
              {
                schedule.filter((item) => {
                  if (item.status !== 'completed') {
                    return item;
                  }
                  return null;
                }).length
              }
            </span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Active</p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">
              {
                schedule.filter((item) => {
                  if (item.status === 'completed') {
                    return item;
                  }
                  return null;
                }).length
              }
            </span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">Completed</p>
        </div>
        <div>
          <h5 className="text-5xl font-bold text-white">
            <span className="inline text-white">{userCount}</span>
          </h5>
          <p className="text-indigo-100 tracking-wide text-xs font-medium uppercase">ONLINE</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
