import {css, html, repeat} from '@microsoft/fast-element';
import {FASTElementLayout} from '@microsoft/fast-router';

const baseLayoutCss = css`
  .container {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
  }

  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const loginLayout = new FASTElementLayout(
  html`
    <div class="container">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  `,
  baseLayoutCss,
);

export const defaultLayout = new FASTElementLayout(
  html`
    <div class="container">
      <foundation-header logo-src="https://icotar.com/avatar/webtraining" show-luminance-toggle-button>
        ${repeat(
    x => x.config.allRoutes,
    html`
            <zero-button
              appearance="neutral-grey"
              slot="routes"
              value="${x => x.index}"
              @click=${(x, c) => c.parent.navigation.navigateTo(x.path)}
            >
              <zero-icon variant="${x => x.variant}" name="${x => x.icon}"></zero-icon>
              ${x => x.title}
            </zero-button>
          `,
  )}
        <div slot="menu-contents">
          <!-- Example markup -->
          <p>GROUP SLOT</p>
          <zero-tree-view>
              <zero-tree-item>
                  <zero-icon variant="solid" name="location-arrow"></zero-icon>
                  Slot Tree Item
              </zero-tree-item>
              <zero-tree-item>
                  <zero-icon variant="solid" name="location-arrow"></zero-icon>
                  Slot Tree Item
              </zero-tree-item>
          </zero-tree-view>
          <p>GROUP SLOT 2</p>
          <zero-tree-view>
              <zero-tree-item>
                  <zero-icon variant="solid" name="location-arrow"></zero-icon>
                  Slot Tree Item 2
              </zero-tree-item>
              <zero-tree-item>
                  <zero-icon variant="solid" name="location-arrow"></zero-icon>
                  Slot Tree Item 2
              </zero-tree-item>
          </zero-tree-view>        
        </div>
      </foundation-header>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  `,
  css`
    ${baseLayoutCss}

    .content {
      padding-top: 60px;
    }

    foundation-header {
      z-index: 999;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      align-items: center;
      border: none;
    }

    zero-tree-item zero-icon {
      color: #879ba6;
      padding-right: 10px;
    }
  `,
);
