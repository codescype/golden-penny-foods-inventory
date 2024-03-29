export default {
  // APP_DRAWER
  TOGGLE_APP_DRAWER(state, bool) {
    state.appDrawer = { ...state.appDrawer, isShown: bool };
  },
  TOGGLE_APP_DRAWER_ENABLED(state, bool) {
    state.appDrawer = { ...state.appDrawer, isEnabled: bool };
  },
  TOGGLE_APP_DRAWER_MINI_VARIANT(state, bool) {
    state.appDrawer = { ...state.appDrawer, isMiniVariant: bool };
  },
  TOGGLE_APP_DRAWER_MINI_VARIANT_ENABLED(state, bool) {
    state.appDrawer = { ...state.appDrawer, isMiniVariantEnabled: bool };
  },
  TOGGLE_APP_DRAWER_PERMANENT(state, bool) {
    state = { ...state.appDrawer, PermanentAppDrawer: bool };
  },
  TOGGLE_APP_DRAWER_TEMPORARY(state, bool) {
    state = { ...state.appDrawer, temporaryAppDrawer: bool };
  },
  SET_APP_DRAWER(
    state,
    {
      isEnabled = true,
      isTemporary = true,
      isFloating = true,
      isPermanent = false,
      isMiniVariantEnabled = false,
      isMiniVariant = false,
      isShown = false
    }
  ) {
    // console.log('[store/ui] setting snackbar')

    state.appDrawer.isEnabled = isEnabled;
    state.appDrawer.isTemporary = isTemporary;
    state.appDrawer.isFloating = isFloating;
    state.appDrawer.isPermanent = isPermanent;
    state.appDrawer.isMiniVariantEnabled = isMiniVariantEnabled;
    state.appDrawer.isMiniVariant = isMiniVariant;
    state.appDrawer.isShown = isShown;
  },

  SET_APP_DRAWER_DISABLED(state) {
    state.appDrawer = { ...state.appDrawer, ...state.appDrawerDisabled };
  },

  SET_APP_DRAWER_MINI_VARIANT(state) {
    state.appDrawer = { ...state.appDrawer, ...state.appDrawerMiniPermanent };
  },

  // SNACKBAR
  TOGGLE_SNACKBAR(state, payload) {
    // console.log('[ui/TOGGLE_SNACKBAR]');
    // console.dir(payload);
    state.snackbar.show = payload;
  },
  SET_SNACKBAR(
    state,
    {
      text,
      textColor = 'accent--text',
      color = 'white',
      closable = true,
      icon = 'info',
      iconColor = 'accent',
      closeBtnColor = 'accent',
      closeBtnTextColor = 'grey--text text--lighten-3',
      timeout = 6000
    }
  ) {
    // console.log('[store/ui] setting snackbar')

    state.snackbar.show = false;
    state.snackbar.text = text;
    state.snackbar.textColor = textColor;
    state.snackbar.color = color;
    state.snackbar.closable = closable;
    state.snackbar.icon = icon;
    state.snackbar.iconColor = iconColor;
    state.snackbar.closeBtnColor = closeBtnColor;
    state.snackbar.closeBtnTextColor = closeBtnTextColor;
    state.snackbar.timeout = timeout;
    state.snackbar.show = true;
  }
};
