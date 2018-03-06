import React from 'react';

export default ({ paragraphs }) => {
  return (
    <div className="lorem-ipsum">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. A scelerisque purus semper eget duis at tellus at urna. Volutpat odio facilisis mauris sit amet. Enim nunc faucibus a pellentesque. Enim sit amet venenatis urna cursus eget nunc scelerisque. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Ac ut consequat semper viverra nam libero. Tincidunt ornare massa eget egestas purus viverra. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Et odio pellentesque diam volutpat commodo. Vulputate ut pharetra sit amet aliquam id diam. Non odio euismod lacinia at quis risus sed.
      </p>
      {paragraphs >= 2 ? <p>
        Velit laoreet id donec ultrices tincidunt arcu non. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Et netus et malesuada fames ac turpis egestas. Tempus urna et pharetra pharetra massa massa. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Aenean sed adipiscing diam donec adipiscing tristique risus. Sed felis eget velit aliquet sagittis. Volutpat est velit egestas dui id ornare arcu odio. Pretium fusce id velit ut tortor pretium viverra. Tincidunt tortor aliquam nulla facilisi. Venenatis lectus magna fringilla urna. Est sit amet facilisis magna etiam tempor orci eu lobortis. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae. A lacus vestibulum sed arcu non odio euismod lacinia. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Tempus urna et pharetra pharetra massa. Sed augue lacus viverra vitae congue. Amet purus gravida quis blandit turpis.
      </p> : null}
      {paragraphs >= 3 ? <p>
        Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Quis risus sed vulputate odio ut enim blandit. At urna condimentum mattis pellentesque id nibh tortor id. Egestas dui id ornare arcu odio ut. Fermentum posuere urna nec tincidunt praesent. Donec adipiscing tristique risus nec feugiat. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Ultricies integer quis auctor elit sed vulputate mi sit. Velit egestas dui id ornare arcu odio ut sem. Amet aliquam id diam maecenas ultricies mi. Curabitur gravida arcu ac tortor. Sed enim ut sem viverra aliquet eget sit. Enim sed faucibus turpis in eu mi. Ut venenatis tellus in metus.
      </p> : null}
      {paragraphs >= 4 ? <p>
        Penatibus et magnis dis parturient montes. Sem fringilla ut morbi tincidunt augue. Ut lectus arcu bibendum at varius vel pharetra vel. Erat imperdiet sed euismod nisi porta. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Sapien faucibus et molestie ac feugiat sed lectus. At augue eget arcu dictum varius duis. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Vestibulum lectus mauris ultrices eros in cursus turpis. Faucibus a pellentesque sit amet porttitor eget. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Amet consectetur adipiscing elit pellentesque. Proin fermentum leo vel orci porta non pulvinar neque laoreet. Sem et tortor consequat id porta nibh venenatis cras sed. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Integer vitae justo eget magna fermentum iaculis eu non diam. Adipiscing at in tellus integer feugiat. Vestibulum morbi blandit cursus risus at. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa. Mauris nunc congue nisi vitae suscipit tellus mauris.
      </p> : null}
      {paragraphs >= 5 ? <p>
        Sit amet mattis vulputate enim nulla. Sed egestas egestas fringilla phasellus. Amet nulla facilisi morbi tempus iaculis. Nibh cras pulvinar mattis nunc sed. Mi in nulla posuere sollicitudin aliquam ultrices sagittis. Arcu odio ut sem nulla pharetra diam sit. Turpis cursus in hac habitasse platea. Nunc sed blandit libero volutpat sed cras ornare. Feugiat in ante metus dictum. Gravida neque convallis a cras semper. Diam vulputate ut pharetra sit amet. Justo laoreet sit amet cursus sit amet dictum. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Lorem ipsum dolor sit amet. Viverra orci sagittis eu volutpat odio facilisis mauris sit. In nisl nisi scelerisque eu ultrices.
      </p> : null}
    </div>
  );
};
