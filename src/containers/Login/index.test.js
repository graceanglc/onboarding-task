import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MemoryRouter, Redirect } from 'react-router-dom';

import theme from 'src/styles/theme';
import { mockThunk  Store } from 'test/utils';

import Login from '.';

describe('Login', () => {
  it('renders login screen if not authenticated', () => {
    const initialState = {
      auth: {
        isAuthenticated: false,
      },
      router: {
        location: {
          path: '/login',
        },
      },
    };
    const store = mockThunkStore(initialState);

    const tree = mount(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/login']}>
          <Login store={store} />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(tree.find(Redirect)).toHaveLength(0);
    expect(toJSON(tree.find(Login), { noKey: true })).toMatchSnapshot();
  });

  it('redirect to / if authenticated', () => {
    const initialState = {
      auth: {
        isAuthenticated: true,
      },
      router: {
        location: {
          path: '/login',
        },
      },
    };
    const store = mockThunkStore(initialState);

    const tree = mount(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/login']}>
          <LoginScreen store={store} />
        </MemoryRouter>
      </ThemeProvider>
    );
    expect(tree.find(Redirect)).toHaveLength(1);
    expect(toJSON(tree.find(LoginScreen), { noKey: true })).toMatchSnapshot();
  });
});
