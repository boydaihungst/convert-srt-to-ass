export const scriptInfo = {
  section: 'Script Info',
  body: [
    {
      key: 'Title',
      value: ''
    },
    {
      key: 'ScriptType',
      value: 'v4.00+'
    },
    {
      key: 'PlayDepth',
      value: '0'
    },
    {
      key: 'ScaledBorderAndShadow',
      value: 'yes'
    },
    {
      key: 'PlayResX',
      value: '1920'
    },
    {
      key: 'PlayResY',
      value: '1080'
    }
  ]
};

export const styles = {
  section: 'V4+ Styles',
  body: [
    {
      key: 'Format',
      value: [
        'Name',
        'Fontname',
        'Fontsize',
        'PrimaryColour',
        'SecondaryColour',
        'OutlineColour',
        'BackColour',
        'Bold',
        'Italic',
        'Underline',
        'StrikeOut',
        'ScaleX',
        'ScaleY',
        'Spacing',
        'Angle',
        'BorderStyle',
        'Outline',
        'Shadow',
        'Alignment',
        'MarginL',
        'MarginR',
        'MarginV',
        'Encoding'
      ]
    },
    {
      key: 'Style',
      value: {
        'Name': 'Default',
        'Fontname': 'Noto Sans',
        'Fontsize': '80',
        'PrimaryColour': '&H00FFFFFF',
        'SecondaryColour': '&H000000FF',
        'OutlineColour': '&H00002208',
        'BackColour': '&H00000000',
        'Bold': '-1',
        'Italic': '0',
        'Underline': '0',
        'StrikeOut': '0',
        'ScaleX': '100',
        'ScaleY': '100',
        'Spacing': '0',
        'Angle': '0',
        'BorderStyle': '1',
        'Outline': '3',
        'Shadow': '2',
        'Alignment': '2',
        'MarginL': '0',
        'MarginR': '0',
        'MarginV': '65',
        'Encoding': '1'
      }
    }
  ]
};

export const events = {
  section: 'Events',
  body: [
    {
      key: 'Format',
      'value': [
        'Layer',
        'Start',
        'End',
        'Style',
        'Name',
        'MarginL',
        'MarginR',
        'MarginV',
        'Effect',
        'Text'
      ]
    }
  ]
};

export const dialogue = {
  key: 'Dialogue',
  value: {
    Layer: '1',
    Start: '00:00:00.00',
    End: '00:00:00.00',
    Style: 'Default',
    Name: '',
    MarginL: '0',
    MarginR: '0',
    MarginV: '0',
    Effect: '',
    Text: ''
  }
};

export const dialogueScript = '{\\fad(90,20)\\k90}';
export const commentScript = '{\\k90}';
export const scriptFX = 'template pre-line all keeptags';
export const script = '!retime("line",$start < 0 and -$start or -0,200)!{!$start < 0 and "\\\\k" .. ($start/10) or "\\\\k0"!\\fad(!$start < 0 and $start or 300!,200)}';

