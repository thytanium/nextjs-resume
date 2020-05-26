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
    <div className="shadow bg-white rounded">
      <div className={classnames(
        'px-4 py-2 flex justify-between items-center rounded-t',
        {
          'bg-blue-700': !type,
          'bg-gray-700': type === 'project',
        },
      )}>
        {link && (
          <a href={link} target="_blank">
            <span className="uppercase font-bold text-white">{title}</span>
          </a>
        )}
        {!link && (
          <span className="uppercase font-bold text-white">{title}</span>
        )}
        {type === 'project' && (
          <span className="px-1 uppercase font-bold bg-gray-200 text-gray-700 text-xs rounded">Project</span>
        )}
      </div>
      {img && (
        <div className="w-full h-16" style={{
          background: `url("${img}") no-repeat center`,
        }} />
      )}
      {(companyName || date) && (
        <div className="px-4 py-2 flex justify-between">
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
