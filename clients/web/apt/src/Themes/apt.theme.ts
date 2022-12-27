export const Colors = {
  primary: '#3644D9',
  secondary: '#ECAE00',
  success: '#0F9855',
  default: '#989595',
  danger: '#D44235',
  warning: '#FE9D0C',
};

export const Font = {
  family: 'inter',
};

export const Theme = {
  title: {
    fontWeight: '900',
    fontFamily: Font.family,
  },
  titleCard: {
    fontWeight: '600',
    fontFamily: Font.family,
  },
  button: {
    primary: {
      backgroundColor: Colors.primary,
      borderColor: Colors.primary,
      color: '#FFFFFF',
    },
    secondary: {
      backgroundColor: Colors.secondary,
      borderColor: Colors.secondary,
      color: '#FFFFFF',
    },
    success: {
      backgroundColor: Colors.success,
      borderColor: Colors.success,
      color: '#FFFFFF',
    },
    default: {
      backgroundColor: Colors.default,
      borderColor: Colors.default,
      color: '#FFFFFF',
    },
    warning: {
      backgroundColor: Colors.warning,
      borderColor: Colors.warning,
      color: '#FFFFFF',
    },
    danger: {
      backgroundColor: Colors.danger,
      borderColor: Colors.danger,
      color: '#FFFFFF',
    },
  },
  borderBase: {
    borderRadius: '4px',
    border: '0.10000000149011612px solid rgb(221, 217, 217)',
  },
};

export const Positioning = {
  start: {
    display: 'flex',
    justifyContent: 'start',
  },
  end: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  between: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  around: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  evenly: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
};
