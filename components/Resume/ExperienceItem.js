import React from 'react'
import classnames from 'classnames'

export default function ExperienceItem({
  children,
  title,
  type,
  img,
  companyName,
  date,
  tags,
  link,
}) {
  return (
    <div className={`bg-white shadow-md rounded ${type === 'project' ? 'border-t-2 border-indigo-500' : ''}`}>
      <div className={classnames(
        'px-4 py-2 flex justify-between items-center rounded-t',
        {
          'bg-indigo-700': !type,
          'bg-white': type === 'project',
        },
      )}>
        {link && (
          <a href={link} target="_blank">
            <span className="uppercase font-bold text-gray-700 hover:text-indigo-700">{title}</span>
          </a>
        )}
        {!link && (
          <span className={`uppercase font-bold ${type === 'project' ? 'text-gray-700' : 'text-white'}`}>{title}</span>
        )}
      </div>
      {img && (
        <div className="w-full h-16" style={{
          background: `url("${img}") no-repeat center`,
        }} />
      )}
      {(companyName || date) && (
        <div className="px-4 pb-1 flex justify-between border-b border-gray-200">
          <span className="text-xs text-gray-600 uppercase">{companyName}</span>
          <span className="text-xs text-gray-600 uppercase">{date}</span>
        </div>
      )}
      <div className="px-4 pb-4 pt-1 text-gray-700">
        {children}
      </div>
      {tags && (
        <div className="border-t px-4 pt-2 pb-3 rounded-b">
          <div className="flex flex-wrap">
            {tags.map(tag => (
              <span
                key={tag.name}
                className={`block rounded px-1 text-xs uppercase font-bold mr-1 mt-1 text-white bg-${tag.color}-600`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
