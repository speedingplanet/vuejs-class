import { shallowMount } from '@vue/test-utils';
import BasicComponent from '@/components/demos/BasicComponent';

describe( 'BasicComponent.vue', () => {
  it( 'renders props.msg when passed', () => {
    const someProp = 'new message';
    const wrapper = shallowMount( BasicComponent, {
      props: { someProp },
    } );
    expect( wrapper.text() ).toMatch( someProp );
  } );
} );
