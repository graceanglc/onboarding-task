import React from 'react';
import { startCase } from 'lodash';

import { Dropdown, DropdownRow } from 'src/components/PageComponents';
import { FILTER_PLACEHOLDER } from './constants';

export function prettifySnakeCase(str) {
  return startCase(str.replace(/_/g, ' '));
}

export function defaultSelectString(placeholder) {
  return `- ${FILTER_PLACEHOLDER}${prettifySnakeCase(placeholder)} -`;
}

export function createOptionsWithUnassigned(options, placeholder) {
  return [defaultSelectString(placeholder), ...options];
}

export function getBasePath(pathname) {
  if (pathname) {
    return pathname.split('/')[1];
  }
  return '/';
}

export function getSearchBasePath(pathname) {
  const basePath = getBasePath(pathname);
  if (!['type', 'page'].includes(basePath)) {
    return `/${basePath}`;
  }
  return /stores/;
}

export function isPermitted(passport, requiredPermissions = []) {
  return (
    passport &&
    (requiredPermissions.length < 1 ||
      requiredPermissions.some(permit => passport.includes(permit)))
  );
}

export function createDropdownFilters(filters, currentParams, onChangeFilter) {
  return (
    <DropdownRow margin="0 0 1rem 0">
      {filters.map(({ value, options }) => (
        <Dropdown
          key={value}
          value={currentParams[value] || defaultSelectString(value)}
          onChange={onChangeFilter(value)}
        >
          {createOptionsWithUnassigned(options, value).map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </Dropdown>
      ))}
    </DropdownRow>
  );
}
